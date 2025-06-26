import { Request, Response } from 'express';
import { pool } from '../db/pool';

/**
 * Get about content (assumes only one record)
 */
export async function getAbout(_req: Request, res: Response) {
    try {
        const result = await pool.query('SELECT content FROM about LIMIT 1');
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'About content not found' });
        }
        return res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error getting about:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

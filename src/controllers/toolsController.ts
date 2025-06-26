import { Request, Response } from 'express';
import { pool } from '../db/pool';

/**
 * Get all tools
 */
export const getAllTools = async (_req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT icon, label FROM tools');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error getting tools:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
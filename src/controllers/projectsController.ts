import { Request, Response } from 'express';
import { pool } from '../db/pool';

/**
 * Get all projects
 */
export const getAllProjects = async (_req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT title, description, link, technologies FROM projects');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error getting projects:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
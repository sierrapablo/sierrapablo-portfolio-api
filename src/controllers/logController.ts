import { Request, Response } from 'express';
import { pool } from '../db/pool';

/**
 * Fetch all log entries from the database.
 */
export async function getAllLogs(_req: Request, res: Response) {
  try {
    const result = await pool.query('SELECT date, message FROM log_entries ORDER BY date DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching logs' });
  }
}

import { Request, Response } from 'express';
import { pool } from '../db/pool';

/**
 * Fetch all log entries from the database.
 */
export async function getAllLogs(_req: Request, res: Response) {
  try {
    const result = await pool.query('SELECT * FROM log_entries ORDER BY date DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching logs' });
  }
}

/**
 * Insert a new log entry into the database.
 */
export async function createLog(req: Request, res: Response) {
  const { date, message } = req.body;
  if (!date || !message) return res.status(400).json({ error: 'Missing fields' });

  try {
    const result = await pool.query(
      'INSERT INTO log_entries (id, date, message) VALUES (gen_random_uuid(), $1, $2) RETURNING *',
      [date, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error creating log' });
  }
}

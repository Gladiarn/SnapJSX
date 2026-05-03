"use client";

import { motion } from "framer-motion";

interface Column {
  key: string;
  header: string;
}

interface BasicTableProps {
  columns: Column[];
  data: Record<string, React.ReactNode>[];
  className?: string;
}

/**
 * Basic Table - A minimalist data table with premium spacing.
 */
export function BasicTable({ columns, data, className = "" }: BasicTableProps) {
  return (
    <div
      className={`w-full overflow-hidden rounded-[2rem] border border-border/50 bg-card ${className}`}
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border/50">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-muted-foreground"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <motion.tr
              key={row.id?.toString() || i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group hover:bg-primary/5 transition-colors border-b border-border/20 last:border-0"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-8 py-5 text-sm font-medium text-foreground"
                >
                  {row[col.key]}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

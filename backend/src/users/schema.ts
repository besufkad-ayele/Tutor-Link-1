// import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

// export const users = pgTable('users', {
//   id: serial('id').primaryKey(),
//   name: varchar('name', { length: 255 }).notNull(),
//   email: varchar('email', { length: 255 }).notNull().unique(),
//   password: text('password').notNull(),
//   createdAt: timestamp('created_at').defaultNow().notNull(),
// });
import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
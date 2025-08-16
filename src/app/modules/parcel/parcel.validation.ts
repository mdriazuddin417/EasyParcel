import { z } from "zod";


export const zParcelCreate = z.object({
  type: z.string().min(1),
  weightKg: z.number().positive().optional(),
  pickupAddress: z.string().min(5),
  dropoffAddress: z.string().min(5),
  receiver: z.object({
    name: z.string().min(2),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    address: z.string().min(5),
  }),
  expectedDeliveryDate: z.string().optional().transform((s) => (s ? new Date(s) : undefined)),
});

export const zParcelStatusUpdate = z.object({
  status: z.enum([
    'REQUESTED',
    'APPROVED',
    'DISPATCHED',
    'PICKED',
    'IN_TRANSIT',
    'OUT_FOR_DELIVERY',
    'DELIVERED',
    'CANCELLED',
    'RETURNED',
    'HELD',
    'BLOCKED',
  ]),
  note: z.string().optional(),
  location: z.string().optional(),
});

export const zParcelCancel = z.object({ reason: z.string().optional() });
import mongoose from "mongoose";


export type ParcelStatus =
  | 'REQUESTED'
  | 'APPROVED'
  | 'DISPATCHED'
  | 'PICKED'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'RETURNED'
  | 'HELD'
  | 'BLOCKED';

  export interface IStatusLog {
  status: ParcelStatus;
  note?: string;
  location?: string;
  updatedBy?: mongoose.Types.ObjectId; // user/admin who updated
  timestamp: Date;
}

export interface IParcel {
  trackingId: string;
  type: string; // e.g., "document" | "parcel" | etc.
  weightKg?: number;
  fee: number;
  sender: mongoose.Types.ObjectId; // ref User
  receiver: {
    name: string;
    email?: string;
    phone?: string;
    address: string;
  };
  pickupAddress: string;
  dropoffAddress: string;
  status: ParcelStatus;
  statusLogs: IStatusLog[];
  isBlocked?: boolean;
  isCanceled?: boolean;
  expectedDeliveryDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
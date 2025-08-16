import mongoose, { Model, Schema } from "mongoose";
import { IParcel, IStatusLog } from "./parcel.interface";


function generateTrackingId(): string {
  const d = new Date();
  const date = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(
    d.getDate()
  ).padStart(2, '0')}`;
  const rand = Math.floor(Math.random() * 900000 + 100000).toString();
  return `TRK-${date}-${rand}`;
}

const statusLogSchema = new Schema<IStatusLog>(
  {
    status: { type: String, required: true },
    note: { type: String },
    location: { type: String },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    timestamp: { type: Date, required: true },
  },
  { timestamps: true }
);

const parcelSchema = new Schema<IParcel>(
  {
    trackingId: { type: String, required: true, unique: true, index: true },
    type: { type: String, required: true },
    weightKg: { type: Number },
    fee: { type: Number, required: true, default: 0 },
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: {
      name: { type: String, required: true },
      email: { type: String },
      phone: { type: String },
      address: { type: String, required: true },
    },
    pickupAddress: { type: String, required: true },
    dropoffAddress: { type: String, required: true },
    status: {
      type: String,
      enum: [
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
      ],
      default: 'REQUESTED',
    },
    statusLogs: { type: [statusLogSchema], default: [] },
    isBlocked: { type: Boolean, default: false },
    isCanceled: { type: Boolean, default: false },
    expectedDeliveryDate: { type: Date },
  },
  { timestamps: true }
);

// Ensure tracking ID
parcelSchema.pre('validate', function (next) {
  const p = this as IParcel;
  if (!p.trackingId) p.trackingId = generateTrackingId();
  next();
});



export const ParcelModel: Model<IParcel> = mongoose.model<IParcel>('Parcel', parcelSchema);
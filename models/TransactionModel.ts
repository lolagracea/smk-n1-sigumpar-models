// models/TransactionModel.js (atau .ts)
import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "t_transaction";

const TransactionModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    journal_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "t_journals",
        key: "id",
      },
      onDelete: "CASCADE",
    },

    bukti_transaksi: {
      // path file bukti transfer
      type: DataTypes.TEXT,
      allowNull: true,
    },

    status: {
      // "menunggu_dicairkan" | "sudah_dicairkan"
      type: DataTypes.ENUM("menunggu_dicairkan", "sudah_dicairkan"),
      allowNull: false,
      defaultValue: "menunggu_dicairkan",
    },

    reviewed_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default TransactionModel;

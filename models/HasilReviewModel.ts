import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "t_hasil_review";

const HasilReviewModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "t_journal_reviews",
        key: "id",
      },
      onDelete: "CASCADE",
    },

    review_ke: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },

    catatan: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    status_perbaikan: {
      type: DataTypes.TEXT,
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

export default HasilReviewModel;

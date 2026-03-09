import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "t_journal_reviews";

const JurnalReviewModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },

    journal_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    reviewer_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "menunggu_disetujui",
        "menunggu",
        "disetujui",
        "ditolak",
        "menunggu_perbaikan",
        "menunggu_direview",
        "finalisasi",
        "menunggu_konfirmasi_kaprodi",
        "disetujui_kaprodi",
         "disetujui_lppm",
        "ditolak_lppm"
      ),
      defaultValue: "menunggu",
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

export default JurnalReviewModel;

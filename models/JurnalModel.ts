import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "t_journals";

const JurnalModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },

    // FK user UUID
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    // STEP 1
    jumlah_penulis: { type: DataTypes.INTEGER, allowNull: true },
    tipe_penulis: { type: DataTypes.STRING, allowNull: true },
    ketidaklengkapan: { type: DataTypes.STRING, allowNull: true },
    melakukan_penelitian_internal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sudah_mengabdi: { type: DataTypes.BOOLEAN, defaultValue: false },

    // STEP 2
    judul_makalah: { type: DataTypes.STRING, allowNull: true },
    nama_jurnal: { type: DataTypes.STRING, allowNull: true },
    website: { type: DataTypes.STRING, allowNull: true },
    tanggal_mulai: { type: DataTypes.DATE, allowNull: true },
    tanggal_selesai: { type: DataTypes.DATE, allowNull: true },
    mesin_pengindex: { type: DataTypes.STRING, allowNull: true },
    biaya_publikasi: { type: DataTypes.INTEGER, allowNull: true },
    kategori_kewajiban: { type: DataTypes.JSON, allowNull: true },

    // STEP 3
    submit_paper: { type: DataTypes.STRING, allowNull: true },
    submit_paper_path: { type: DataTypes.STRING, allowNull: true },
    reviewers: { type: DataTypes.JSON, allowNull: true },
    finalisasi_complete: { type: DataTypes.BOOLEAN, defaultValue: false },
    finalisasi_status: { type: DataTypes.STRING, allowNull: true },
    finalisasi_catatan: { type: DataTypes.TEXT, allowNull: true },

    // WORKFLOW CONTROL
    last_step: { type: DataTypes.INTEGER, defaultValue: 1 },
    progress: { type: DataTypes.INTEGER, defaultValue: 0 },
    status_label: { type: DataTypes.STRING, defaultValue: "Submit Data" },
  },
  {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

export default JurnalModel;

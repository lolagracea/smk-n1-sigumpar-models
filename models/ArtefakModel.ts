import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "t_artefak";

const ArtefakModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    journal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "t_journals",
        key: "id",
      },
      onDelete: "CASCADE",
    },

    review_dosen: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    submit_paper: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    diterima: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    catatan_panitia: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    bukti_seminar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    softcopy_final: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    surat_permohonan_dana: {
      type: DataTypes.STRING,
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

export default ArtefakModel;

import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";

const TABLE_NAME = "t_journal_authors";

const JurnalAuthorModel = db.define(
  TABLE_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    journal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    nama_penulis: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    nidn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: TABLE_NAME,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
);

export default JurnalAuthorModel;

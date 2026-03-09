import { DataTypes } from "sequelize";
import db from "../utils/dbUtil";
import HakAksesModel from "./HakAksesModel";

const TABLE_NAME = "t_user_profiles";

const UserProfileModel = db.define(
  TABLE_NAME,
  {
    // PRIMARY KEY = USER_ID
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },

    nama: DataTypes.STRING,
    prodi: DataTypes.STRING,
    nidn: DataTypes.STRING,
    role: { type: DataTypes.STRING, defaultValue: "User" },
    email: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    gelar: DataTypes.STRING,
    foto: DataTypes.STRING,
  },
  {
    tableName: TABLE_NAME,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

// RELASI
UserProfileModel.belongsTo(HakAksesModel, {
  foreignKey: "user_id",
  targetKey: "user_id",
  onDelete: "CASCADE",
});

HakAksesModel.hasOne(UserProfileModel, {
  foreignKey: "user_id",
  sourceKey: "user_id",
});

export default UserProfileModel;

import type { Model, ModelStatic } from "sequelize";

// Import individual models
import HakAksesModel from "./HakAksesModel";
import TodoModel from "./TodoModel";
import JurnalModel from "./JurnalModel";
import JurnalAuthorModel from "./JurnalAuthorModel";
import JurnalReviewModel from "./JurnalReviewModel";
import HasilReviewModel from "./HasilReviewModel";
import ArtefakModel from "./ArtefakModel";
import UserProfileModel from "./UserProfileModel";
import TransactionModel from "./TransactionModel";

// Export models individually for direct import
export {
  HakAksesModel,
  TodoModel,
  JurnalModel,
  JurnalAuthorModel,
  JurnalReviewModel,
  HasilReviewModel,
  ArtefakModel,
  UserProfileModel,
  TransactionModel,
};

// Add all models to array for auto registration in migrate/sync/seed
const models: ModelStatic<Model>[] = [
  HakAksesModel,
  TodoModel,
  JurnalModel,
  JurnalAuthorModel,
  JurnalReviewModel,
  HasilReviewModel,
  ArtefakModel,
  UserProfileModel,
  TransactionModel,
];

export default models;

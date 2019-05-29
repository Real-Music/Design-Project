const withDateNoTz = require("sequelize-date-no-tz-postgres");

module.exports = (sequelize, DataTypes) => {
  const NoTimeZone = withDateNoTz(DataTypes);
  const transactionTable = sequelize.define("TransactionTable", {
    senderPhone: { type: DataTypes.STRING, allowNull: false },
    recipientPhone: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.STRING, allowNull: false },
    fee: { type: DataTypes.STRING, allowNull: false },
    isSuccess: { type: DataTypes.BOOLEAN },
    transactionReference: { type: DataTypes.STRING },
    time: { type: NoTimeZone.DATE_NO_TZ }
  });

  return transactionTable;
};

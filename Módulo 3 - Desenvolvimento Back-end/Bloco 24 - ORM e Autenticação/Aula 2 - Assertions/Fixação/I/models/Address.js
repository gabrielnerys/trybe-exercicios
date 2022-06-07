module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tablename: 'Addresses',
    underScore: true,
  });

  Employee.associate = (models) => {
    Employee.belongsTo(models.Employee,
      { foreignKey: 'employeeId', as: 'employees' });
  };

  return Address;
};
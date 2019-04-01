module.exports = function(sequelize, DataTypes){
    let User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
}
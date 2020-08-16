module.exports = (sequelize, DataTypes) => {
    return sequelize.define('article', {
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        context: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        hit: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0,
            allowNull: false
        },
        like: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0,
            allowNull: false
        },
        expire_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true
    })
}
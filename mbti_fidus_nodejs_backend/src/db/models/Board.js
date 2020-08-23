module.exports = (sequelize, DataTypes) => {
    return sequelize.define('board', {
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true
    })
}
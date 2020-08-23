module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ref_parent: {
            type: DataTypes.UUID,
            allowNull: true
        }
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true
    })
}
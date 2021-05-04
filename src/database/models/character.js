export default (sequelize, DataTypes) => {
    const Character = sequelize.define('Character', {
        name: {
            type: DataTypes.STRING,
            defaultValue: ''
        },
        health: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        },
        attack: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        defense: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        magik: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        remaining_skills: {
            type: DataTypes.INTEGER,
            defaultValue: 12
        },
        rank: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
    })

    return Character
}
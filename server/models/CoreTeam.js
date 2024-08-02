module.exports = (sequelize, DataTypes) => {
    const CoreTeam = sequelize.define("CoreTeam", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Heyy! Fac parte din Core Team, so hit me up if you need anything!', // Static default value as a fallback
        },
        profilePicture: {
            type: DataTypes.BLOB('long'), // Use BLOB for storing binary data
            allowNull: true, // Optional field
        }
    }, {
        hooks: {
            beforeCreate: (coreTeam, options) => {
                if (!coreTeam.description) {
                    coreTeam.description = `Heyy! Eu sunt ${coreTeam.firstName}, membru din Core Team, so hit me up if you need anything!`;
                }
            }
        }
    });

    return CoreTeam;
};

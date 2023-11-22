const sequelize = require('../db')
const Sequelize = require('sequelize')

const Review = sequelize.define('Review', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stars: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

const Post = sequelize.define('Post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

const Apartment = sequelize.define('Apartment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    namePL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nameEN: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    images: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    citiesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    appointmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    map: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descriptionPL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descriptionEN: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    square: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rooms: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    floor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    czynsz: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stan: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    balkon: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    parking: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    heating: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

const City = sequelize.define('City', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    namePL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nameEN: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

const Appointment = sequelize.define('Appointment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    namePL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nameEN: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

const Type = sequelize.define('Type', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    namePL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nameEN: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

Apartment.belongsTo(City, { foreignKey: 'citiesId' })
City.hasMany(Apartment, { foreignKey: 'citiesId' })

Apartment.belongsTo(Appointment, { foreignKey: 'appointmentId' })
Appointment.hasMany(Apartment, { foreignKey: 'appointmentId' })

Apartment.belongsTo(Type, { foreignKey: 'typeId' })
Type.hasMany(Apartment, { foreignKey: 'typeId' })

module.exports = {
    Review,
    User,
    City,
    Appointment,
    Type,
    Post,
    Apartment,
}

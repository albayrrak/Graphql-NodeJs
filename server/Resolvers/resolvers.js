const data = require('../Data/data.json')
const { CustomError } = require('../Middleware/CustomError')

const { events, locations, users, participants } = data

const resolvers = {
    Query: {
        // Events Resolvers
        events: () => events,
        event: (_, args) => {

            if (args.id < 1) {

                throw new CustomError('No event found matching this ID')
            }
            const data = events.find(event => event.id === +args.id)
            return data

        },

        // Location Resolvers
        locations: () => locations,
        location: (_, args) => {

            if (args.id < 1) {
                throw new CustomError('No location found matching this ID')
            }
            const data = locations.find(location => location.id === +args.id)
            return data
        },

        // User Resolvers
        users: () => users,
        user: (_, args) => {
            if (args.id < 1) {
                throw new CustomError('No user found matching this ID')
            }
            const data = users.find(user => user.id === +args.id)
            return data
        },

        // Participant Resolvers
        participants: () => participants,
        participant: (_, args) => {
            if (args.id < 1) {
                throw new CustomError('No participant fount matching this ID')
            }
            const data = participants.find(participant => participant.id === +args.id)
            return data
        }
    },

    User: {
        event: (parent, args) => {
            const data = events.filter(event => event.user_id === parent.id)
            return data
        }
    },

    Event: {
        user: (parent, args) => {
            const data = users.find(user => user.id === parent.user_id)
            return data
        },
        location: (parent, args) => {
            const data = locations.find(location => location.id === parent.location_id)
            return data
        },
        participants: (parent, args) => {
            const data = participants.filter(participant => participant.event_id === parent.id)
            return data
        }

    },

    Participant: {
        users: (parent, args) => {
            const data = users.filter(user => user.id === parent.user_id)
            return data
        }
    }

}

module.exports = { resolvers }
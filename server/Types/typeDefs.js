const { gql } = require('apollo-server')


const typeDefs = gql`

    type Event{
        id:ID!
        title:String!
        desc:String!
        date:String!
        from:String!
        to:String!
        location_id:ID!
        user_id:ID!
        user:User!
        location:Location!
        participants:[Participant!]!
    }

    type Location{
        id:ID!
        name:String!
        desc:String!
        lat:Float!
        lng:Float!
    }

    type User{
        id:ID!
        username:String!
        email:String!
        event:[Event!]!
    }

    type Participant{
        id:ID!
        user_id:ID!
        event_id:ID!
        users:[User!]!
    }

    type Query{
        ## Event Queries
        events:[Event!]!
        event(id:ID!):Event!
        
        ## Location Queries
        locations:[Location!]!
        location(id:ID!):Location!
        
        ## User Queries
        users:[User!]!
        user(id:ID!): User!
        
        ## Participant Queries
        participants:[Participant!]!
        participant(id:ID!): Participant!
    }

`



module.exports = { typeDefs }
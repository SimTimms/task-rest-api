import { buildSchema } from "graphql";

const itemSchema = buildSchema(`
  type Item {
    _id: ID!
    name: String!
    price: Float!
  }

type Query {
    getItems: [Item]
    getItem(id: ID!): Item
    }

type Mutation {
    createItem(name: String!, price: Float!): Item
    updateItem(id: ID!, name: String!, price: Float!): Item
    deleteItem(id: ID!): Item
    }
`);

export default itemSchema;

import decamelize from 'decamelize';
import { fromGlobalId } from 'graphql-relay';
import pluralize from 'pluralize';


const types = {};
const endpoints = {};
const getItemOverrides = {};

export function getEndpoint(type) {
  return endpoints[type];
}

function getDefaultEndpoint(type) {
  const endpoint = pluralize(decamelize(type.name));
  return id => id ? `${endpoint}/${id}` : endpoint;
}

export function registerType(type, endpoint, getItemOverride) {
  types[type.name] = type;
  endpoints[type] = endpoint || getDefaultEndpoint(type);
  getItemOverrides[type] = getItemOverride;

  // Allow e.g. `export default registerType(MyType);`.
  return type;
}

export async function idFetcher(globalId, info) {
  const { type, id } = fromGlobalId(globalId);

  const getItemOverride = getItemOverrides[type];
  let item;
  if (getItemOverride) {
    item = await getItemOverride(id, info);
  } else {
    item = await getItem(getEndpoint(type), id, info);
  }

  return { type, ...item };
}

export function typeResolver(obj) {
  return types[obj.type];
}

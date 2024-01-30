import { PROVIDER_OVERLAP, SLUG_OVERLAP } from "../constants";
import ALL_CHAINS from '../constants/minified-chains.json';




/**
 * returns the slug for this chain
 * @param chainId 
 * @returns 
 */
export const GET_ALL_NETWORK_SLUG = (chainId: number) => {
  if (chainId) {
    const slug = SLUG_OVERLAP[chainId];
    if (slug) {
      return slug
    } else {
      return ALL_CHAINS.find(ch => ch.chainId === chainId)?.shortName;
    }
  }
}

export const GET_ALL_NETWORK_PROVIDER = (chainId: number) => {
  if (chainId) {
    const slug = PROVIDER_OVERLAP[chainId];
    if (slug) {
      return slug
    } else {
      return ALL_CHAINS.find(ch => ch.chainId === chainId)?.rpc[0];
    }
  }
}
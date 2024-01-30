
import { GET_ALL_NETWORK_CHAIN_ID, GET_ALL_NETWORK_PROVIDER, GET_ALL_NETWORK_SLUG } from '../../src/utils'

describe('utils', () => {
    test('get correct slug for ethereum', () => {
        expect(GET_ALL_NETWORK_SLUG(1)).toBe('ethereum');
    });

    test('get correct chainId for ethereum', () => {
        expect(GET_ALL_NETWORK_CHAIN_ID('ethereum')).toBe(1);
    });

    test('get correct provider for ethereum', () => {
        expect(GET_ALL_NETWORK_PROVIDER(1)).toBe('https://eth.llamarpc.com');
    });

    test('get correct slug for non default network', () => {
        expect(GET_ALL_NETWORK_SLUG(7)).toBe('tch');
    });

    test('get correct chainId for non default network', () => {
        expect(GET_ALL_NETWORK_CHAIN_ID('tch')).toBe(7);
    });

    test('get correct provider for non default network', () => {
        expect(GET_ALL_NETWORK_PROVIDER(7)).toBe('https://rpc.dome.cloud');
    });
});
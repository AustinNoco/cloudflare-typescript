// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routes', () => {
  test('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.networks.routes.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      ip_network: '172.16.0.0/16',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.networks.routes.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      ip_network: '172.16.0.0/16',
      comment: 'Example comment for this route.',
      virtual_network_id: {},
    });
  });

  test('list: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.networks.routes.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.networks.routes.list({
      account_id: '699d98642c564d2e855e9661899b7252',
      comment: 'Example comment for this route.',
      existed_at: {},
      is_deleted: {},
      network_subset: {},
      network_superset: {},
      page: 1,
      per_page: 1,
      route_id: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      tun_types: 'cfd_tunnel,warp_connector',
      tunnel_id: {},
      virtual_network_id: {},
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.networks.routes.delete(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.networks.routes.delete(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.networks.routes.edit(
      'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.networks.routes.edit('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      comment: 'Example comment for this route.',
      network: '172.16.0.0/16',
      tun_type: 'cfd_tunnel',
      tunnel_id: {},
      virtual_network_id: {},
    });
  });
});

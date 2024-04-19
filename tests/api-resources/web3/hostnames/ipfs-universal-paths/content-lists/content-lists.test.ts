// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contentLists', () => {
  test('update: only required params', async () => {
    const responsePromise = cloudflare.web3.hostnames.ipfsUniversalPaths.contentLists.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      { action: 'block', entries: [{}, {}, {}] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await cloudflare.web3.hostnames.ipfsUniversalPaths.contentLists.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        action: 'block',
        entries: [
          {
            content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
            description: 'this is my content list entry',
            type: 'cid',
          },
          {
            content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
            description: 'this is my content list entry',
            type: 'cid',
          },
          {
            content: 'QmPZ9gcCEpqKTo6aq61g2nXGUhM4iCL3ewB6LDXZCtioEB',
            description: 'this is my content list entry',
            type: 'cid',
          },
        ],
      },
    );
  });

  test('get', async () => {
    const responsePromise = cloudflare.web3.hostnames.ipfsUniversalPaths.contentLists.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.web3.hostnames.ipfsUniversalPaths.contentLists.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});

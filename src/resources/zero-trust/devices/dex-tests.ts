// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class DEXTests extends APIResource {
  /**
   * Create a DEX test.
   */
  create(params: DEXTestCreateParams, options?: Core.RequestOptions): Core.APIPromise<SchemaHTTP | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/dex_tests`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SchemaHTTP | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a DEX test.
   */
  update(
    dexTestId: string,
    params: DEXTestUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaHTTP | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/dex_tests/${dexTestId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SchemaHTTP | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all DEX tests.
   */
  list(
    params: DEXTestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SchemaHTTPSSinglePage, SchemaHTTP> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/dex_tests`,
      SchemaHTTPSSinglePage,
      options,
    );
  }

  /**
   * Delete a Device DEX test. Returns the remaining device dex tests for the
   * account.
   */
  delete(
    dexTestId: string,
    params: DEXTestDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DEXTestDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/devices/dex_tests/${dexTestId}`,
        options,
      ) as Core.APIPromise<{ result: DEXTestDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a single DEX test.
   */
  get(
    dexTestId: string,
    params: DEXTestGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaHTTP | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/dex_tests/${dexTestId}`, options) as Core.APIPromise<{
        result: SchemaHTTP | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SchemaHTTPSSinglePage extends SinglePage<SchemaHTTP> {}

export interface DEXTest {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: SchemaData;

  /**
   * Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * How often the test will run.
   */
  interval: string;

  /**
   * The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Additional details about the test.
   */
  description?: string;

  /**
   * Device settings profiles targeted by this test
   */
  target_policies?: Array<DEXTest.TargetPolicy>;

  targeted?: boolean;

  /**
   * The unique identifier for the test.
   */
  test_id?: string;
}

export namespace DEXTest {
  export interface TargetPolicy {
    /**
     * The id of the device settings profile
     */
    id?: string;

    /**
     * Whether the profile is the account default
     */
    default?: boolean;

    /**
     * The name of the device settings profile
     */
    name?: string;
  }
}

/**
 * The configuration object which contains the details for the WARP client to
 * conduct the test.
 */
export interface SchemaData {
  /**
   * The desired endpoint to test.
   */
  host?: string;

  /**
   * The type of test.
   */
  kind?: string;

  /**
   * The HTTP request method type.
   */
  method?: string;
}

/**
 * The configuration object which contains the details for the WARP client to
 * conduct the test.
 */
export interface SchemaDataParam {
  /**
   * The desired endpoint to test.
   */
  host?: string;

  /**
   * The type of test.
   */
  kind?: string;

  /**
   * The HTTP request method type.
   */
  method?: string;
}

export interface SchemaHTTP {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: SchemaData;

  /**
   * Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * How often the test will run.
   */
  interval: string;

  /**
   * The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Additional details about the test.
   */
  description?: string;

  /**
   * Device settings profiles targeted by this test
   */
  target_policies?: Array<SchemaHTTP.TargetPolicy>;

  targeted?: boolean;

  /**
   * The unique identifier for the test.
   */
  test_id?: string;
}

export namespace SchemaHTTP {
  export interface TargetPolicy {
    /**
     * The id of the device settings profile
     */
    id?: string;

    /**
     * Whether the profile is the account default
     */
    default?: boolean;

    /**
     * The name of the device settings profile
     */
    name?: string;
  }
}

export interface DEXTestDeleteResponse {
  dex_tests?: Array<SchemaHTTP>;
}

export interface DEXTestCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The configuration object which contains the details for the WARP
   * client to conduct the test.
   */
  data: SchemaDataParam;

  /**
   * Body param: Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * Body param: How often the test will run.
   */
  interval: string;

  /**
   * Body param: The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Body param: Additional details about the test.
   */
  description?: string;

  /**
   * Body param: Device settings profiles targeted by this test
   */
  target_policies?: Array<DEXTestCreateParams.TargetPolicy>;

  /**
   * Body param:
   */
  targeted?: boolean;
}

export namespace DEXTestCreateParams {
  export interface TargetPolicy {
    /**
     * The id of the device settings profile
     */
    id?: string;

    /**
     * Whether the profile is the account default
     */
    default?: boolean;

    /**
     * The name of the device settings profile
     */
    name?: string;
  }
}

export interface DEXTestUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The configuration object which contains the details for the WARP
   * client to conduct the test.
   */
  data: SchemaDataParam;

  /**
   * Body param: Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * Body param: How often the test will run.
   */
  interval: string;

  /**
   * Body param: The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Body param: Additional details about the test.
   */
  description?: string;

  /**
   * Body param: Device settings profiles targeted by this test
   */
  target_policies?: Array<DEXTestUpdateParams.TargetPolicy>;

  /**
   * Body param:
   */
  targeted?: boolean;
}

export namespace DEXTestUpdateParams {
  export interface TargetPolicy {
    /**
     * The id of the device settings profile
     */
    id?: string;

    /**
     * Whether the profile is the account default
     */
    default?: boolean;

    /**
     * The name of the device settings profile
     */
    name?: string;
  }
}

export interface DEXTestListParams {
  account_id: string;
}

export interface DEXTestDeleteParams {
  account_id: string;
}

export interface DEXTestGetParams {
  account_id: string;
}

DEXTests.SchemaHTTPSSinglePage = SchemaHTTPSSinglePage;

export declare namespace DEXTests {
  export {
    type DEXTest as DEXTest,
    type SchemaData as SchemaData,
    type SchemaHTTP as SchemaHTTP,
    type DEXTestDeleteResponse as DEXTestDeleteResponse,
    SchemaHTTPSSinglePage as SchemaHTTPSSinglePage,
    type DEXTestCreateParams as DEXTestCreateParams,
    type DEXTestUpdateParams as DEXTestUpdateParams,
    type DEXTestListParams as DEXTestListParams,
    type DEXTestDeleteParams as DEXTestDeleteParams,
    type DEXTestGetParams as DEXTestGetParams,
  };
}

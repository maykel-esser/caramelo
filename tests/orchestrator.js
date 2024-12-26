/**
 * @flow Orchestrator
 * @author Maykel Esser
 *
 * @description This file contains the orchestrator logic for the tests.
 * It will wait for all services to be up and running before running the tests.
 *
 * This is useful when you have multiple services that need to be up and running
 * before you can run the tests, for instance, we need nextJS to be up and running and then
 * we can run the tests for the API.
 *
 * @see beforeAll in tests. We are calling the orchestrator to wait for all services to be up and running.
 */
import retry from "async-retry";

/**
 * @function waitForAllServices
 * @author Maykel Esser
 *
 * @description Wait for all services to be up and running.
 *
 * @returns {Promise<void>}
 * @see Tests - We are calling this function before running the tests through the beforeAll function.
 */
async function waitForAllServices() {
    await waitForWebServer();
}

/**
 * @function waitForWebServer
 * @author Maykel Esser
 *
 * @description Wait for the web server (NextJS) to be up and running.
 *
 * @returns {Promise<void>}
 * @see waitForAllServices
 */
async function waitForWebServer() {
    return retry(fetchStatusPage, {
        retries: 100,
        minTimeout: 100,
        maxTimeout: 1000
    });
}

/**
 * @function fetchStatusPage
 * @author Maykel Esser
 *
 * @description Fetch the status page.
 *
 * @param {boolean} bail - If we should bail (abort) the request.
 * @param {number} tryNumber - The number of the attempt.
 *
 * @returns {Promise<void>}
 * @see waitForWebServer
 */
async function fetchStatusPage(bail, tryNumber) {

    console.log(`Attempt to fetch Status Page ${tryNumber}`);

    const response = await fetch("http://localhost:3000/api/v1/status");

    if (response.status !== 200) {
        throw new Error();
    }
}

export default {
    waitForAllServices
}

import { browser } from '$app/env';

const { APP_API, PROD } = import.meta.env;

const protocol = PROD ? 'https' : 'http';

/**
 * @param {string} endpoint
 * @param {RequestInit} init
 */
const request = async (endpoint, init = {}) => {
	if (!browser) return;
	const jwt = /jwt=([^;]+)/.exec(document.cookie)?.[1];

	const { result, error } = await fetch(
		`${protocol}://${APP_API}/${endpoint.replace(/^\/+/, '')}`,
		{
			method: init.method || 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`
			},
			body: JSON.stringify(init.body)
		}
	).then((res) => res.json());

	if (error) throw error;

	return result;
};

export class API {
	/**
	 * @param {string} endpoint
	 */
	static get(endpoint) {
		return request(endpoint, { method: 'GET' });
	}

	/**
	 * @param {string} endpoint
	 * @param {*} body
	 */
	static post(endpoint, body) {
		return request(endpoint, { method: 'POST', body });
	}

	/**
	 * @param {string} endpoint
	 * @param {*} body
	 */
	static patch(endpoint, body) {
		return request(endpoint, { method: 'PATCH', body });
	}

	/**
	 * @param {string} endpoint
	 * @param {*} body
	 */
	static put(endpoint, body) {
		return request(endpoint, { method: 'PUT', body });
	}

	/**
	 * @param {string} endpoint
	 * @param {*} body
	 */
	static delete(endpoint, body) {
		return request(endpoint, { method: 'DELETE', body });
	}
}

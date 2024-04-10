export const parseUnstoppableDomains = async (address: string): Promise<string[]> => {
    const query = new URLSearchParams('perPage: 100').toString();
    const resp = await fetch(
        `https://api.unstoppabledomains.com/resolve/reverse/query?${query}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer 8umj2rbsownpxuyz2hbw73dfcu3krdw6eenju1ofahg2tbwn`
            },
            body: JSON.stringify({addresses: [address]})
        }
    );

    const data = await resp.json();
    return data.data.map((i: {meta: {domain: string}}) => i.meta.domain, data)
}
// pages/api/route.js

let dataStore = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

export async function GET() {
    return Response.json(dataStore);
}

export async function POST(request) {
    const comment = await request.json();

    const newfile = {
        id: dataStore.length + 1,
        name: comment.name,
    }
    dataStore.push(newfile);
    return new Response(JSON.stringify(newfile), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    }
    );
}
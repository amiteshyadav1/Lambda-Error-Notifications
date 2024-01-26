export const handler = async (event) => {
  try {
    console.log('Event received', { event });

    throw new Error('FILE_NOT_FOUND');
  } catch (error) {
    console.error(`Lambda Error`, JSON.stringify(error, Object.getOwnPropertyNames(error)));

    // Handle error gracefully and return 500 Internal Server Error to client.
    const errorResponse = {
      statusCode: 500,
      body: JSON.stringify('Internal Server Error'),
    };
    return errorResponse;
  }
};

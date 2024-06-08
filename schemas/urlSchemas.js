import z from 'zod';

const schema = z.object({
  longUrl: z.string().url({ message: "Invalid URL" }),
});

export const validateURL = async (object) => {
  try {
    await schema.parseAsync(object);
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
};

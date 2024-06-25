export const copyTopClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {}
};

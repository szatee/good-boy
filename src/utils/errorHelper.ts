export function isErrorWithMessage(
  error: unknown,
): error is { data: { messages: any[] } } {
  return typeof error === 'object' && error != null && 'data' in error;
}

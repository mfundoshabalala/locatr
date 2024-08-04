/**
 * Extracts nested data from form values based on the form structure.
 * @param formValues - The object containing the form values.
 * @returns A structured object with the nested data extracted.
 */
export function extractFormData(formValues: Record<string, any>): Record<string, any> {
  // Helper function to recursively extract nested data
  const extractNestedData = (data: Record<string, any>): Record<string, any> => {
    const result: Record<string, any> = {};
    Object.keys(data).forEach(key => {
      const value = data[key];
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively extract nested objects
        result[key] = extractNestedData(value);
      } else {
        // Directly assign primitive values or arrays
        result[key] = value;
      }
    });
    return result;
  };

  // Start the extraction from the top-level form values
  return extractNestedData(formValues);
}

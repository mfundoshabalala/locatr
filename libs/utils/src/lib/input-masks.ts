export function applyPhoneMask(value: string): string {
  value = value.replace(/\D/g, '');

  if (!value.startsWith('0')) {
    value = '0' + value;
  }

  if (value.length > 10) {
    value = value.slice(0, 10);
  }

  if (value.length > 3 && value.length <= 6) {
    value = value.replace(/^(\d{3})(\d+)/, '$1 $2');
  } else if (value.length > 6) {
    value = value.replace(/^(\d{3})(\d{3})(\d+)/, '$1 $2 $3');
  }

  return value;
}

export function applyPointMask(value: string, label:string): string {
  // Remove invalid characters (allow only digits, negative sign, and a single period)
  value = value.replace(/[^0-9.-]/g, '');

  // Ensure only one period exists
  const parts = value.split('.');
  if (parts.length > 2) {
    value = `${parts[0]}.${parts.slice(1).join('')}`;
  }

  // Handle invalid number parsing
  const numericValue = parseFloat(value);

  // If numericValue is NaN, clear the value (enforce numeric input)
  if (isNaN(numericValue)) {
    return '';
  }

  // Ensure valid range for longitude (-180 to 180) and latitude (-90 to 90)
  if (label.toLowerCase().includes('longitude')) {
    if (numericValue < -180) {
      return '-180';
    }
    if (numericValue > 180) {
      return '180';
    }
  } else if (label.toLowerCase().includes('latitude')) {
    if (numericValue < -90) {
      return '-90';
    }
    if (numericValue > 90) {
      return '90';
    }
  }

  return numericValue.toString();
}
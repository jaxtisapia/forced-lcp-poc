/**
 * Simulates a user click on a DOM element
 * @param element - The DOM element to click on
 * @param options - Optional click event options
 */
export function simulateUserClick(
  element: HTMLElement,
  options: {
    bubbles?: boolean;
    cancelable?: boolean;
    view?: Window | null;
    detail?: number;
    screenX?: number;
    screenY?: number;
    clientX?: number;
    clientY?: number;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    metaKey?: boolean;
    button?: number;
    relatedTarget?: EventTarget | null;
  } = {}
): void {
  if (!element) {
    throw new Error('Element is required for simulating a click');
  }

  // Default options for a typical user click
  const defaultOptions = {
    bubbles: true,
    cancelable: true,
    view: window,
    detail: 1,
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    button: 0, // Left mouse button
    relatedTarget: null,
    ...options
  };

  // Create and dispatch mousedown event
  const mouseDownEvent = new MouseEvent('mousedown', {
    ...defaultOptions,
    button: 0
  });
  element.dispatchEvent(mouseDownEvent);

  // Create and dispatch mouseup event
  const mouseUpEvent = new MouseEvent('mouseup', {
    ...defaultOptions,
    button: 0
  });
  element.dispatchEvent(mouseUpEvent);

  // Create and dispatch click event
  const clickEvent = new MouseEvent('click', {
    ...defaultOptions,
    button: 0
  });
  element.dispatchEvent(clickEvent);
}

/**
 * Simulates a user click at specific viewport coordinates
 * @param x - X coordinate in the viewport
 * @param y - Y coordinate in the viewport
 * @param options - Optional click event options
 */
export function simulateUserClickAtCoordinates(
  x: number,
  y: number,
  options: {
    bubbles?: boolean;
    cancelable?: boolean;
    view?: Window | null;
    detail?: number;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    metaKey?: boolean;
    button?: number;
  } = {}
): void {
  // Default options for a click at specific coordinates
  const defaultOptions = {
    bubbles: true,
    cancelable: true,
    view: window,
    detail: 1,
    clientX: x,
    clientY: y,
    screenX: x + window.screenX,
    screenY: y + window.screenY,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    button: 0, // Left mouse button
    ...options
  };

  // Create and dispatch mousedown event
  const mouseDownEvent = new MouseEvent('mousedown', {
    ...defaultOptions,
    button: 0
  });
  document.dispatchEvent(mouseDownEvent);

  // Create and dispatch mouseup event
  const mouseUpEvent = new MouseEvent('mouseup', {
    ...defaultOptions,
    button: 0
  });
  document.dispatchEvent(mouseUpEvent);

  // Create and dispatch click event
  const clickEvent = new MouseEvent('click', {
    ...defaultOptions,
    button: 0
  });
  document.dispatchEvent(clickEvent);
}

/**
 * Simulates a user click at the upper right-most corner of the viewport
 * @param options - Optional click event options
 */
export function simulateUserClickUpperRightCorner(
  options: {
    bubbles?: boolean;
    cancelable?: boolean;
    view?: Window | null;
    detail?: number;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    metaKey?: boolean;
    button?: number;
    offset?: number; // Optional offset from the exact corner
  } = {}
): void {
  const { offset = 0, ...clickOptions } = options;
  
  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Calculate coordinates for upper right corner with optional offset
  const x = viewportWidth - offset;
  const y = offset;
  
  simulateUserClickAtCoordinates(x, y, clickOptions);
}

/**
 * Simulates a user click on an element by selector
 * @param selector - CSS selector for the element to click
 * @param options - Optional click event options
 */
export function simulateUserClickBySelector(
  selector: string,
  options?: Parameters<typeof simulateUserClick>[1]
): void {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found`);
  }
  simulateUserClick(element, options);
}

/**
 * Simulates a user click on an element by ID
 * @param id - ID of the element to click
 * @param options - Optional click event options
 */
export function simulateUserClickById(
  id: string,
  options?: Parameters<typeof simulateUserClick>[1]
): void {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Element with ID "${id}" not found`);
  }
  simulateUserClick(element, options);
}

/**
 * Simulates a user click on an element by class name (clicks the first matching element)
 * @param className - Class name of the element to click
 * @param options - Optional click event options
 */
export function simulateUserClickByClassName(
  className: string,
  options?: Parameters<typeof simulateUserClick>[1]
): void {
  const element = document.getElementsByClassName(className)[0] as HTMLElement;
  if (!element) {
    throw new Error(`Element with class "${className}" not found`);
  }
  simulateUserClick(element, options);
}
export default interface IOut<T> {
    get(): T;
    subscribe(callback: (val: T) => void): void;
    unsubscribe(callback: (val: T) => void): void;
}
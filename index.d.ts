/// <reference no-default-lib="true" />
/// <reference lib="es2015" />
/// <reference lib="es2017.string" />
/// <reference path="./src/webworker.d.ts" />

declare var self: ServiceWorkerGlobalScope;
declare var clients: Clients;
declare var registration: ServiceWorkerRegistration;

declare var onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
declare var onerror: ((this: ServiceWorkerGlobalScope, ev: ErrorEvent) => any) | null;
declare var onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null;
declare var oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
declare var onmessageerror: ((this: ServiceWorkerGlobalScope, ev: MessageEvent) => any) | null;
declare var onmessage: ((this: ServiceWorkerGlobalScope, ev: MessageEvent) => any) | null;
declare var onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
declare var onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
declare var onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null;
declare var onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: PushSubscriptionChangeEvent) => any) | null;
declare var onsync: ((this: ServiceWorkerGlobalScope, ev: SyncEvent) => any) | null;

declare function addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
declare function skipWaiting(): Promise<void>;
declare function addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;

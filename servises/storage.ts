import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageSchema = {
	backgroundColor:string
};

class TypedStorage {
	async setItem<K extends keyof StorageSchema>(key: K, value: StorageSchema[K]): Promise<void> {
		await AsyncStorage.setItem(key, JSON.stringify(value));
	}

	async setProperty<K extends keyof StorageSchema>(key: K, value: Partial<StorageSchema[K]>): Promise<void> {
		const existingValue = await this.getItem(key) || {};
		const newValue = { ...existingValue, ...value };
		await AsyncStorage.setItem(key, JSON.stringify(newValue));
	}

	async getItem<K extends keyof StorageSchema>(key: K): Promise<StorageSchema[K] | null> {
		const value = await AsyncStorage.getItem(key);
		return value ? JSON.parse(value) as StorageSchema[K] : null;
	}

	async removeItem<K extends keyof StorageSchema>(key: K): Promise<void> {
		await AsyncStorage.removeItem(key);
	}
}

export const typedStorage = new TypedStorage();

import json
from datetime import datetime

def add_new_app(json_file):
    with open(json_file, 'r') as file:
        data = json.load(file)
    
    new_app_data = {}
    
    new_app_data['name'] = input("Enter the name of the app: ")
    new_app_data['bundleIdentifier'] = input("Enter the bundle identifier of the app: ")
    new_app_data['developerName'] = input("Enter the developer name: ")
    new_app_data['subtitle'] = input("Enter the subtitle: ")
    new_app_data['iconURL'] = input("Enter the icon URL: ")
    new_app_data['tintColor'] = input("Enter the tint color (in hex format): ")
    new_app_data['category'] = input("Enter the category: ")

    new_app_data['versions'] = []
    new_app_data['versionstore'] = []

    is_ios = input("Are you making this app for iOS? (yes/no): ").lower()
    if is_ios == "yes":
        version_data = {}
        version_data['version'] = input("Enter the version number: ")
        version_data['buildVersion'] = input("Enter the build version: ")
        version_data['date'] = datetime.now().strftime("%Y-%m-%d")
        version_data['downloadURL'] = input("Enter the download URL for iOS version: ")
        version_data['minOSVersion'] = input("Enter the minimum iOS version required: ")
        new_app_data['versions'].append(version_data)

    is_linux = input("Are you making this app for Linux? (yes/no): ").lower()
    if is_linux == "yes":
        if 'versionstore' not in new_app_data:
            new_app_data['versionstore'] = []
        versionstore_data = {}
        versionstore_data['platform'] = 'linux'
        versionstore_data['version'] = input("Enter the version number for Linux: ")
        versionstore_data['buildVersion'] = input("Enter the build version for Linux: ")
        versionstore_data['downloadUrl'] = input("Enter the download URL for Linux version: ")
        new_app_data['versionstore'].append(versionstore_data)

    is_web = input("Are you making this app for Web? (yes/no): ").lower()
    if is_web == "yes":
        if 'versionstore' not in new_app_data:
            new_app_data['versionstore'] = []
        versionstore_data = {}
        versionstore_data['platform'] = 'web'
        versionstore_data['version'] = input("Enter the version number for Web: ")
        versionstore_data['buildVersion'] = input("Enter the build version for Web: ")
        versionstore_data['downloadUrl'] = input("Enter the download URL for Web version: ")
        new_app_data['versionstore'].append(versionstore_data)

    is_android = input("Are you making this app for Android? (yes/no): ").lower()
    if is_android == "yes":
        if 'versionstore' not in new_app_data:
            new_app_data['versionstore'] = []
        versionstore_data = {}
        versionstore_data['platform'] = 'android'
        versionstore_data['version'] = input("Enter the version number for Android: ")
        versionstore_data['buildVersion'] = input("Enter the build version for Android: ")
        versionstore_data['downloadUrl'] = input("Enter the download URL for Android version: ")
        new_app_data['versionstore'].append(versionstore_data)
    
    data['apps'].append(new_app_data)
    
    with open(json_file, 'w') as file:
        json.dump(data, file, indent=2)
    
    print("New app added successfully!")

# Example usage:
json_file_path = "./store.json"
add_new_app(json_file_path)

from algoliasearch.search_client import SearchClient

# Initialize the Algolia client
client = SearchClient.create('DZTMW46IAP', '0d4ae6b34dce79a7c280825489678c60')
index = client.init_index('dev_survey')

# Function to determine the version from the URL
def get_version_from_url(url):
    if 'v2' in url:
        return 'v2'
    if 'v3' in url:
        return 'v3'
    if 'v1' in url:
        return 'v1'
    return ['v1', 'v2', 'v3']

# Fetch all records from the index
def fetch_all_records():
    records = []
    cursor = index.browse_objects({
        'attributesToRetrieve': '*'  # Retrieve all attributes
    })
    for record in cursor:
        records.append(record)
    print("Total records fetched: {}".format(len(records)))
    return records

# Update the version field based on the URL
def update_records_version(records):
    updated_records = []
    for record in records:
        updated_record = record.copy()  # Make a copy to avoid modifying the original record
        updated_record['version'] = get_version_from_url(record['url'])
        updated_records.append(updated_record)
    return updated_records

# Push updated records back to the Algolia index
def push_updated_records(updated_records):
    chunk_size = 1000  # Algolia recommends indexing in batches of up to 1000 records
    for i in range(0, len(updated_records), chunk_size):
        chunk = updated_records[i:i + chunk_size]
        index.save_objects(chunk)
        print("Pushed {} records".format(len(chunk)))

# Main function to perform the update process
def main():
    try:
        # Step 1: Fetch all records
        records = fetch_all_records()

        # Step 2: Update the version field
        updated_records = update_records_version(records)

        # Step 3: Push the updated records back to Algolia
        push_updated_records(updated_records)

        print('Records updated successfully')
    except Exception as e:
        print('Error updating records:', e)

# Run the main function
if __name__ == '__main__':
    main()

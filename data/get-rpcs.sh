while IFS= read -r line; do
  CHAIN_INFO=$(chainlist --check-rpc "$line")
  if echo "$CHAIN_INFO" | grep -m 1 "Active" > /dev/null; then
	echo "$line $(echo "$CHAIN_INFO" | grep -m 1 "Active" | awk '{print $2}')"
  else
    echo "No active RPC found for $line"
  fi
done < stargate-chain-ids.txt >> stargate-chain-ids-with-rpc.txt
up:
	terraform apply --auto-approve -var environment=${ENV}

down:
	terraform destroy --auto-approve -var environment=${ENV}

init:
<<<<<<< HEAD
	terraform init --backend-config="key=state/${ENV}.tfstate" --backend-config="dynamodb_table=RMIT-locktable-t4l65n" --backend-config="bucket=rmit-kops-state-t4l65n"
=======
	terraform init --backend-config="key=state/${ENV}.tfstate" --backend-config="dynamodb_table=RMIT-locktable-t4l65n" --backend-config="bucket=rmit-tfstate-t4l65n"
>>>>>>> 22777faf5661a94b0a6f0606377cfed0720523ae

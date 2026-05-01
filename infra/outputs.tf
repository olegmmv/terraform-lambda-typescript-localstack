output "function_name" {
  description = "Lambda function name"
  value       = aws_lambda_function.hello.function_name
}

output "function_arn" {
  description = "Lambda function ARN"
  value       = aws_lambda_function.hello.arn
}

output "log_group_name" {
  description = "CloudWatch log group for this function"
  value       = aws_cloudwatch_log_group.hello_logs.name
}
